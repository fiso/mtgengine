"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Resuscitate extends UnimplementedCard {
  constructor(game) {
    super(game, "Resuscitate", "Exodus", "EXO");
  }
}

module.exports = Resuscitate;
