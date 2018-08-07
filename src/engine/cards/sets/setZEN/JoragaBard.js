"use strict";
const Constants = require ("../../../Constants");
const JoragaBardBase = require("../setDDP/JoragaBard");

class JoragaBard extends JoragaBardBase {
  constructor (game) {
    super(game, "Joraga Bard", "Zendikar", "ZEN");
  }
}

module.exports = JoragaBard;
