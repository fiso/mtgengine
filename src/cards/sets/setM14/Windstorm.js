"use strict";
const Constants = require ("../../../Constants");
const WindstormBase = require("../setGVL/Windstorm");

class Windstorm extends WindstormBase {
  constructor (game) {
    super(game, "Windstorm", "Magic 2014", "M14");
  }
}

module.exports = Windstorm;
