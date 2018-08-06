"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TangleclawWerewolf extends UnimplementedCard {
  constructor (game) {
    super(game, "Tangleclaw Werewolf", "Eldritch Moon", "EMN");
  }
}

module.exports = TangleclawWerewolf;
