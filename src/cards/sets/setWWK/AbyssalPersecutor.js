"use strict";
const Constants = require ("../../../Constants");
const AbyssalPersecutorBase = require("../setC14/AbyssalPersecutor");

class AbyssalPersecutor extends AbyssalPersecutorBase {
  constructor(game) {
    super(game, "Abyssal Persecutor", "Worldwake", "WWK");
  }
}

module.exports = AbyssalPersecutor;
