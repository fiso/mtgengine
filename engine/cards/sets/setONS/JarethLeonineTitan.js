"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const JarethLeonineTitanBase = require("../setC15/JarethLeonineTitan.js");

class JarethLeonineTitan extends JarethLeonineTitanBase {
  constructor(game) {
    super(game, "Jareth, Leonine Titan", "Onslaught", "ONS");
  }
}

module.exports = JarethLeonineTitan;
