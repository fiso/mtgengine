"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AggressiveUrgeBase = require("../setINV/AggressiveUrge.js");

class AggressiveUrge extends AggressiveUrgeBase {
  constructor(game) {
    super(game, "Aggressive Urge", "Tenth Edition", "10E");
  }
}

module.exports = AggressiveUrge;
