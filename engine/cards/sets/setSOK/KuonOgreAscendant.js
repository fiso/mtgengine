"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KuonOgreAscendant extends UnimplementedCard {
  constructor(game) {
    super(game, "Kuon, Ogre Ascendant", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = KuonOgreAscendant;
