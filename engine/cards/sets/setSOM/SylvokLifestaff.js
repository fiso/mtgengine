"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SylvokLifestaff extends Card {
  constructor(game) {
    super(game, "Sylvok Lifestaff", "Scars of Mirrodin", "SOM");
  }
}

module.exports = SylvokLifestaff;
