"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MongrelPack extends UnimplementedCard {
  constructor(game) {
    super(game, "Mongrel Pack", "Tempest", "TMP");
  }
}

module.exports = MongrelPack;
