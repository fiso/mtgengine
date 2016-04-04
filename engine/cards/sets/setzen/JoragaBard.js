"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const JoragaBardBase = require("../setDDP/JoragaBard.js");

class JoragaBard extends JoragaBardBase {
  constructor(game) {
    super(game, "Joraga Bard", "Zendikar", "ZEN");
  }
}

module.exports = JoragaBard;
