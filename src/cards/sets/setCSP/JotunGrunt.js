"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class JotunGrunt extends UnimplementedCard {
  constructor(game) {
    super(game, "Jötun Grunt", "Coldsnap", "CSP");
  }
}

module.exports = JotunGrunt;
