"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NiraHellkiteDuelist extends UnimplementedCard {
  constructor (game) {
    super(game, "Nira, Hellkite Duelist", "2016 Heroes of the Realm", "HTR");
  }
}

module.exports = NiraHellkiteDuelist;
