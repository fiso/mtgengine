"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RavenousTrap extends UnimplementedCard {
  constructor (game) {
    super(game, "Ravenous Trap", "Zendikar", "ZEN");
  }
}

module.exports = RavenousTrap;
