"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SekkiSeasonsGuide extends UnimplementedCard {
  constructor(game) {
    super(game, "Sekki, Seasons' Guide", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = SekkiSeasonsGuide;
