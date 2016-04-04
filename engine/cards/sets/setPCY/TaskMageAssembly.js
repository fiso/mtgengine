"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TaskMageAssembly extends UnimplementedCard {
  constructor(game) {
    super(game, "Task Mage Assembly", "Prophecy", "PCY");
  }
}

module.exports = TaskMageAssembly;
