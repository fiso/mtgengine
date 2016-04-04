"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DranaKalastriaBloodchiefBase = require("../setC14/DranaKalastriaBloodchief.js");

class DranaKalastriaBloodchief extends DranaKalastriaBloodchiefBase {
  constructor(game) {
    super(game, "Drana, Kalastria Bloodchief", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = DranaKalastriaBloodchief;
