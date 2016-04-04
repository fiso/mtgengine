"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BalothWoodcrasherBase = require("../setC13/BalothWoodcrasher.js");

class BalothWoodcrasher extends BalothWoodcrasherBase {
  constructor(game) {
    super(game, "Baloth Woodcrasher", "Zendikar", "ZEN");
  }
}

module.exports = BalothWoodcrasher;
