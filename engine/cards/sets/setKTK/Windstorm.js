"use strict";
const Constants = require ("../../../Constants");
const WindstormBase = require("../setDD3_GVL/Windstorm");

class Windstorm extends WindstormBase {
  constructor(game) {
    super(game, "Windstorm", "Khans of Tarkir", "KTK");
  }
}

module.exports = Windstorm;
