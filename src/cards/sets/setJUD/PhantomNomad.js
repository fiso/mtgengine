"use strict";
const Constants = require ("../../../Constants");
const PhantomNomadBase = require("../setVMA/PhantomNomad");

class PhantomNomad extends PhantomNomadBase {
  constructor (game) {
    super(game, "Phantom Nomad", "Judgment", "JUD");
  }
}

module.exports = PhantomNomad;
