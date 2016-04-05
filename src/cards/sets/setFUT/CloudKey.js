"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CloudKey extends UnimplementedCard {
  constructor(game) {
    super(game, "Cloud Key", "Future Sight", "FUT");
  }
}

module.exports = CloudKey;
