"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TaskMageAssembly extends Card {
  constructor(game) {
    super(game, "Task Mage Assembly", "Prophecy", "PCY");
  }
}

module.exports = TaskMageAssembly;
