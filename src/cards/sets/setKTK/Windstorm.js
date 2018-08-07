"use strict";
const Constants = require ("../../../Constants");
const WindstormBase = require("../setGVL/Windstorm");

class Windstorm extends WindstormBase {
  constructor (game) {
    super(game, "Windstorm", "Khans of Tarkir", "KTK");
  }
}

module.exports = Windstorm;
