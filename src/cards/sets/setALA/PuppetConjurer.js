"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PuppetConjurer extends UnimplementedCard {
  constructor (game) {
    super(game, "Puppet Conjurer", "Shards of Alara", "ALA");
  }
}

module.exports = PuppetConjurer;
