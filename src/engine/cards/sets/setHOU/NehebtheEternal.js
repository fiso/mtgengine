"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NehebtheEternal extends UnimplementedCard {
  constructor (game) {
    super(game, "Neheb, the Eternal", "Hour of Devastation", "HOU");
  }
}

module.exports = NehebtheEternal;
