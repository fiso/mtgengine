"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DawntreaderElk extends UnimplementedCard {
  constructor(game) {
    super(game, "Dawntreader Elk", "Dark Ascension", "DKA");
  }
}

module.exports = DawntreaderElk;
