"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SylvokLifestaff extends UnimplementedCard {
  constructor(game) {
    super(game, "Sylvok Lifestaff", "Scars of Mirrodin", "SOM");
  }
}

module.exports = SylvokLifestaff;
