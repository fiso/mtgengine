"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FlowstoneEmbrace extends UnimplementedCard {
  constructor(game) {
    super(game, "Flowstone Embrace", "Future Sight", "FUT");
  }
}

module.exports = FlowstoneEmbrace;
