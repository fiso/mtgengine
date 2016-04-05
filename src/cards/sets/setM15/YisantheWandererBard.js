"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class YisantheWandererBard extends UnimplementedCard {
  constructor(game) {
    super(game, "Yisan, the Wanderer Bard", "Magic 2015 Core Set", "M15");
  }
}

module.exports = YisantheWandererBard;
