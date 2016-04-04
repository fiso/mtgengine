"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AbyssalSpecterBase = require("../setBRB/AbyssalSpecter.js");

class AbyssalSpecter extends AbyssalSpecterBase {
  constructor(game) {
    super(game, "Abyssal Specter", "Fifth Edition", "5ED");
  }
}

module.exports = AbyssalSpecter;
