"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MoriokRigger extends UnimplementedCard {
  constructor(game) {
    super(game, "Moriok Rigger", "Fifth Dawn", "5DN");
  }
}

module.exports = MoriokRigger;
