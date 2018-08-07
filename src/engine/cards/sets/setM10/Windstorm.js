"use strict";
const Constants = require ("../../../Constants");
const WindstormBase = require("../setGVL/Windstorm");

class Windstorm extends WindstormBase {
  constructor (game) {
    super(game, "Windstorm", "Magic 2010", "M10");
  }
}

module.exports = Windstorm;
