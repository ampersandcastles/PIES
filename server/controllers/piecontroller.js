const router = require("express").Router();
const { PieModel } = require("../models");

// router.get('/', (req, res) => res.send('I love pies!'));

router.get("/", async (req, res) => {
  try {
    const allPies = await PieModel.findAll(); // Line used to get all of our pies.

    res.status(200).json(allPies);
  } catch (err) {
    res.status(500).json({
      error: err,
    });
  }
});

router.post("/", async (req, res) => {
  const { nameOfPie, baseOfPie, crust, timeToBake, servings, ratings } =
    req.body;

  try {
    const Pie = await PieModel.create({
      nameOfPie,
      baseOfPie,
      crust,
      timeToBake,
      servings,
      ratings,
    });

    res.status(201).json({
      message: "Pie created successfully",
      Pie,
    });
  } catch (err) {
    res.status(500).json({
      message: `Failed to create pie: ${err}`,
    });
  }
});

router.put("/:id", async (req, res) => {
  const { nameOfPie, baseOfPie, crust, timeToBake, servings, ratings } =
    req.body;

  try {
    const pieUpdated = await PieModel.update(
      { nameOfPie, baseOfPie, crust, timeToBake, servings, ratings },
      { where: { id: req.params.id } }
    );

    res.status(200).json({
      message: `Pie successfully updated`,
      pieUpdated,
    });
  } catch (err) {
    res.status(500).json({
      message: `Failed to update pie: ${err}`,
    });
  }
});

router.delete("/delete/:id", async (req, res) => {
  try {
    const locatedPie = await PieModel.destroy({
      where: { id: req.params.id },
    });
    res.status(200).json({
      message: "Pie successfully deleted",
      deletedPie: locatedPie,
    });
  } catch (err) {
    res.status(500).json({
      message: `Failed to delete pie: ${err}`,
    });
  }
});

module.exports = router;
