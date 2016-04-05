"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class YavimayaGnats extends UnimplementedCard {
  constructor(game) {
    super(game, "Yavimaya Gnats", "Ice Age", "ICE");
  }
}

module.exports = YavimayaGnats;
