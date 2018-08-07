"use strict";
const Constants = require ("../../../Constants");
const FlusterstormBase = require("../setIMA/Flusterstorm");

class Flusterstorm extends FlusterstormBase {
  constructor (game) {
    super(game, "Flusterstorm", "Legendary Cube", "PZ1");
  }
}

module.exports = Flusterstorm;
