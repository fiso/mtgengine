"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AbyssalPersecutorBase = require("../setC14/AbyssalPersecutor.js");

class AbyssalPersecutor extends AbyssalPersecutorBase {
  constructor(game) {
    super(game, "Abyssal Persecutor", "Worldwake", "WWK");
  }
}

module.exports = AbyssalPersecutor;
