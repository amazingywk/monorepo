<template><div><h2 id="排序算法的稳定性" tabindex="-1"><a class="header-anchor" href="#排序算法的稳定性" aria-hidden="true">#</a> 排序算法的稳定性</h2>
<h3 id="如何区分是否具有稳定性" tabindex="-1"><a class="header-anchor" href="#如何区分是否具有稳定性" aria-hidden="true">#</a> 如何区分是否具有稳定性</h3>
<blockquote>
<p>假定在待排序的序列中，存在多个相同的数据，若经过排序，这些数据的相对位置保持不变，即在原序列中，r[i]=r[j]，且r[i]在r[j]之前，而在排序后的序列中，r[i]仍在r[j]之前，则称这种排序算法是稳定的；否则称为不稳定的.</p>
</blockquote>
<h3 id="算法稳定性有什么作用" tabindex="-1"><a class="header-anchor" href="#算法稳定性有什么作用" aria-hidden="true">#</a> 算法稳定性有什么作用</h3>
<p>假设我们有以下一组学生数据，每个学生有姓名（Name）、学号（ID）、年龄（Age）三个属性：(这里其实已经用了ID进行排序)</p>
<table>
<thead>
<tr>
<th style="text-align:center">Name</th>
<th style="text-align:center">ID</th>
<th style="text-align:center">Age</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">Tom</td>
<td style="text-align:center">001</td>
<td style="text-align:center">20</td>
</tr>
<tr>
<td style="text-align:center">Bob</td>
<td style="text-align:center">002</td>
<td style="text-align:center">20</td>
</tr>
<tr>
<td style="text-align:center">Lily</td>
<td style="text-align:center">003</td>
<td style="text-align:center">19</td>
</tr>
<tr>
<td style="text-align:center">Jack</td>
<td style="text-align:center">004</td>
<td style="text-align:center">20</td>
</tr>
</tbody>
</table>
<p>我们如果使用非稳定的算法对Age进行排序，可能得到：</p>
<table>
<thead>
<tr>
<th style="text-align:center">Name</th>
<th style="text-align:center">ID</th>
<th style="text-align:center">Age</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">Lily</td>
<td style="text-align:center">003</td>
<td style="text-align:center">19</td>
</tr>
<tr>
<td style="text-align:center">Jack</td>
<td style="text-align:center">004</td>
<td style="text-align:center">20</td>
</tr>
<tr>
<td style="text-align:center">Tom</td>
<td style="text-align:center">001</td>
<td style="text-align:center">20</td>
</tr>
<tr>
<td style="text-align:center">Bob</td>
<td style="text-align:center">002</td>
<td style="text-align:center">20</td>
</tr>
</tbody>
</table>
<p>这时很显然，虽然确实是按Age进行排序了，但是原来的ID排序已经乱了。而如果使用稳定的算法，就会保证原来的顺序：</p>
<table>
<thead>
<tr>
<th style="text-align:center">Name</th>
<th style="text-align:center">ID</th>
<th style="text-align:center">Age</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">Lily</td>
<td style="text-align:center">003</td>
<td style="text-align:center">19</td>
</tr>
<tr>
<td style="text-align:center">Tom</td>
<td style="text-align:center">001</td>
<td style="text-align:center">20</td>
</tr>
<tr>
<td style="text-align:center">Bob</td>
<td style="text-align:center">002</td>
<td style="text-align:center">20</td>
</tr>
<tr>
<td style="text-align:center">Jack</td>
<td style="text-align:center">004</td>
<td style="text-align:center">20</td>
</tr>
</tbody>
</table>
</div></template>


