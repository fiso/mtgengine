"use strict";
const Constants = require ("../../../Constants");
const SunbirdsInvocationBase = require("../setXLN/SunbirdsInvocation");

class SunbirdsInvocation extends SunbirdsInvocationBase {
  constructor (game) {
    super(game, "Sunbird's Invocation", "Ixalan Promos", "PXLN");
  }
}

module.exports = SunbirdsInvocation;
