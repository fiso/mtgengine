"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CollectiveRestraint extends UnimplementedCard {
  constructor (game) {
    super(game, "Collective Restraint", "Invasion", "INV");
  }
}

module.exports = CollectiveRestraint;
