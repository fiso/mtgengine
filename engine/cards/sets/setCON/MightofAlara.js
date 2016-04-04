"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MightofAlara extends UnimplementedCard {
  constructor(game) {
    super(game, "Might of Alara", "Conflux", "CON");
  }
}

module.exports = MightofAlara;
