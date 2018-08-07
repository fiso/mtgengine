"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IcatianScout extends UnimplementedCard {
  constructor (game) {
    super(game, "Icatian Scout", "Masters Edition II", "ME2");
  }
}

module.exports = IcatianScout;
