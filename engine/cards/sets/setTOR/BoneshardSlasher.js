"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BoneshardSlasher extends UnimplementedCard {
  constructor(game) {
    super(game, "Boneshard Slasher", "Torment", "TOR");
  }
}

module.exports = BoneshardSlasher;
