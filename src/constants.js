import * as declarationMapper from "./declarations";
import * as expressionMapper from "./expressions";
import * as statementMapper from "./statements";

export const mappers = Object.assign({},
  declarationMapper,
  expressionMapper,
  statementMapper
);

export const generalPolyfillMap = {
  "console.log": argument => `printh(${argument})`,
  "Math.abs": value => `abs(${value})`,
  "Math.ceil": value => `-flr(-${value})`,
  "Math.floor": value => `flr(${value})`,
  "Math.max": values => `max(${values})`,
  "Math.min": values => `min(${values})`,
  "Math.random": () => "rnd()",
  "Math.sqrt": value => `sqrt(${value})`,
  "Math.sin": value => `-sin(${value})`,
  "Object.assign": values => `_assign({${values}})`,
  "Object.entries": values => `_objmap(${values}, _byentries)`,
  "Object.keys": values => `_objmap(${values}, _bykeys)`,
  "Object.values": values => `_objmap(${values}, _byvalues)`
};

export const arrayPolyfillMap = {
  filter: (context, args) => `_filter(${context}, ${args})`,
  forEach: (context, args) => `foreach(${context}, ${args})`,
  includes: (context, arg) => `_includes(${context}, ${arg})`,
  join: (context, args) => `_join(${context}, ${args})`,
  map: (context, args) => `_map(${context}, ${args})`,
  push: (context, args) => `add(${context}, ${args})`,
  reduce: (context, args) => `_reduce(${context}, ${args})`,
  toString: context => `_tostring(${context})`
};
