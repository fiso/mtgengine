"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AbyssalSpecterBase = require("../setBRB/AbyssalSpecter.js");

class AbyssalSpecter extends AbyssalSpecterBase {
  constructor(game) {
    super(game, "Abyssal Specter", "Duels of the Planeswalkers", "DPA");
  }
}

module.exports = AbyssalSpecter;
