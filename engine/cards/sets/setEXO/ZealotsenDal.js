"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ZealotsenDal extends UnimplementedCard {
  constructor(game) {
    super(game, "Zealots en-Dal", "Exodus", "EXO");
  }
}

module.exports = ZealotsenDal;
