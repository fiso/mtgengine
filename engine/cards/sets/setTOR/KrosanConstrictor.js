"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KrosanConstrictor extends UnimplementedCard {
  constructor(game) {
    super(game, "Krosan Constrictor", "Torment", "TOR");
  }
}

module.exports = KrosanConstrictor;
