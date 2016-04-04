"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WindstormBase = require("../setDD3_GVL/Windstorm.js");

class Windstorm extends WindstormBase {
  constructor(game) {
    super(game, "Windstorm", "Magic 2014 Core Set", "M14");
  }
}

module.exports = Windstorm;
