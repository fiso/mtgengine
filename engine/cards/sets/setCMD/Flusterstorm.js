"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FlusterstormBase = require("../setpJGP/Flusterstorm.js");

class Flusterstorm extends FlusterstormBase {
  constructor(game) {
    super(game, "Flusterstorm", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = Flusterstorm;
