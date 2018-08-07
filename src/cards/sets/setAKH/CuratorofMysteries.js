"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CuratorofMysteries extends UnimplementedCard {
  constructor (game) {
    super(game, "Curator of Mysteries", "Amonkhet", "AKH");
  }
}

module.exports = CuratorofMysteries;
