"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DaringBuccaneer extends UnimplementedCard {
  constructor (game) {
    super(game, "Daring Buccaneer", "Rivals of Ixalan", "RIX");
  }
}

module.exports = DaringBuccaneer;
