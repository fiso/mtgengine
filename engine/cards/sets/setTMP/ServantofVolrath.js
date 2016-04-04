"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ServantofVolrath extends UnimplementedCard {
  constructor(game) {
    super(game, "Servant of Volrath", "Tempest", "TMP");
  }
}

module.exports = ServantofVolrath;
