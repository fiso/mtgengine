"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class JötunGrunt extends UnimplementedCard {
  constructor(game) {
    super(game, "Jötun Grunt", "Coldsnap", "CSP");
  }
}

module.exports = JötunGrunt;
