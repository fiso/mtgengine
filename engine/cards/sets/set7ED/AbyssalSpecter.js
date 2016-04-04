"use strict";
const Constants = require ("../../../Constants");
const AbyssalSpecterBase = require("../setBRB/AbyssalSpecter");

class AbyssalSpecter extends AbyssalSpecterBase {
  constructor(game) {
    super(game, "Abyssal Specter", "Seventh Edition", "7ED");
  }
}

module.exports = AbyssalSpecter;
