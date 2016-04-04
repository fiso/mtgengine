"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MyrEnforcerBase = require("../setpFNM/MyrEnforcer.js");

class MyrEnforcer extends MyrEnforcerBase {
  constructor(game) {
    super(game, "Myr Enforcer", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = MyrEnforcer;
